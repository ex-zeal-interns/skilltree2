# frozen_string_literal: true

# category has many ratings
class Category < ApplicationRecord
  has_many :ratings
end
