class AddSenderIdToRelationships < ActiveRecord::Migration[5.2]
  def change
    add_column :relationships, :sender_id, :bigint
  end
end
