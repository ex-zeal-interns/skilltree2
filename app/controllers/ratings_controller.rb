class RatingsController < ApplicationController
    def index
        @ratings = []
        Rating.find_each do |rating|
            @ratings << rating.as_json(:include => {:category => {}})
        end
        render json: @ratings
    end

    def my_ratings
        @ratings = Rating.where(developer_id: params[:user_id]).map do |rating|
          rating.as_json(include: { category: {} })
        end
        render json: @ratings
    end
end
