# frozen_string_literal: true

# ratings belog to categories, mentors, and developers
class Rating < ApplicationRecord
  belongs_to :category

  belongs_to :mentor,
             class_name: 'User',
             foreign_key: 'mentor_id'

  belongs_to :developer,
             class_name: 'User',
             foreign_key: 'developer_id'
end
