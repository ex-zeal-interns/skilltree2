# frozen_string_literal: true

# deals with ratings
class RatingsController < ApplicationController
  def index
    ratings = []
    Rating.find_each do |rating|
      ratings << rating.as_json(include: { category: {} })
    end
    render json: ratings
  end

  def my_ratings
    ratings = Rating.where(developer_id: params[:user_id]).map do |rating|
      rating.as_json(include: { category: {} })
    end
    render json: ratings
  end

  def my_last_rating
    last_ratings_in_each_category = []
    user
    Category.find_each do |category|
      all_my_ratings = Rating.where('developer_id = ? and mentor_id = ? and category_id = ?',
                                    user.id, user.id, category.id)
                             .as_json(include: { category: {} })
      all_my_ratings.length.positive? && last_ratings_in_each_category << all_my_ratings.last
    end
    render json: last_ratings_in_each_category
  end

  def my_last_mentor_rating
    last_ratings_in_each_category = []
    user
    Category.find_each do |category|
      User.find_each do |mentor|
        if user.id != mentor.id
          all_my_ratings = Rating.where('developer_id = ? and mentor_id = ? and category_id = ?',
                                        user.id, mentor.id, category.id)
                                 .as_json(include: { mentor: {} })
          all_my_ratings.length.positive? && last_ratings_in_each_category << all_my_ratings.last
        end
      end
    end
    render json: last_ratings_in_each_category
  end

  def create
    rating = Rating.create(rating_params)
    if rating.valid?
      render json: rating
    else
      render json: rating.errors, status: :unprocessable_entity
    end
  end

  def rating_params
    params.require(:rating).permit(:category_id, :developer_id, :mentor_id, :score)
  end

  def average_rating
    user
    @average = []
    @category = []
    result = 0
    @category_id = Category.find(params[:id]).id

    User.find_each do |mentor|
      all_dev_ratings = Rating.where('developer_id = ? and mentor_id = ? and category_id = ?',
                                    user.id, mentor.id, @category_id)
      all_dev_ratings.length.positive? && @category << all_dev_ratings.last
    end

      @category.each do |score|
        result = result+score.score
        @average_score = result.to_f/@category.length
      end
      @average_score && @average << @average_score

    render json: @average

  end

  private

  def user
    user ||= (User.find_by(unique_url: params[:params]) || User.find(params[:params]))
  end
end
