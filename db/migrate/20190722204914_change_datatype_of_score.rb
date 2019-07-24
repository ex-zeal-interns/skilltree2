# frozen_string_literal: true

class ChangeDatatypeOfScore < ActiveRecord::Migration[5.2]
  def change
    remove_column :ratings, :score
    add_column :ratings, :score, :decimal
  end
end
