class RatingsController < ApplicationController
    def index
        @ratings = []
        Rating.find_each do |rating|
            @ratings << rating.as_json(:include => {:category => {}})
        end
        render json: @ratings
    end

    def myRatings
        @myRatings = []
        Rating.find_each do |rating|
            if rating.developer_id == params[:user_id].to_i
                @myRatings << rating.as_json(:include => {:category => {}})
            end
        end
        render json: @myRatings
    end
end
