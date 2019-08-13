class CreateRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :relationships do |t|
      t.references :mentor
      t.references :developer
      t.integer :status

      t.timestamps
    end
    add_foreign_key :relationships, :users, column: :mentor_id, primary_key: :id
    add_foreign_key :relationships, :users, column: :developer_id, primary_key: :id

  end
end
