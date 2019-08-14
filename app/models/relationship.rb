class Relationship < ApplicationRecord
  belongs_to :mentor,
             class_name: 'User',
             foreign_key: 'mentor_id'

  belongs_to :developer,
             class_name: 'User',
             foreign_key: 'developer_id'
end
