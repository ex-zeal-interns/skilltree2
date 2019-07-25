# frozen_string_literal: true

# deals with categories
class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end
end
