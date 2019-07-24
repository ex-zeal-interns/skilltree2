# frozen_string_literal: true

class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :score
      t.references :mentor
      t.references :developer
      t.references :categories, foreign_key: true
      t.timestamps
    end
    add_foreign_key :ratings, :users, column: :mentor_id, primary_key: :id
    add_foreign_key :ratings, :users, column: :developer_id, primary_key: :id
  end
end
