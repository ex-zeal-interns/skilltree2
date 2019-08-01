# frozen_string_literal: true

class ChangeCategoryColumnName < ActiveRecord::Migration[5.2]
  def change
    remove_column :ratings, :categories_id
    add_column :ratings, :category_id, :bigint
  end
end
