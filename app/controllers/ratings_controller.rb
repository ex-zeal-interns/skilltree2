class RatingsController < ApplicationController
    def index
        @ratings = []
        Rating.find_each do |rating|
            @ratings << rating.as_json(:include => {:category => {}})
        end
        render json: @ratings
    end
end
