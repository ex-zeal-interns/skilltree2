# frozen_string_literal: true

# user class created by devise. has many ratings
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :time_zone, presence: true

  has_many :mentor_ratings,
           class_name: 'Rating',
           foreign_key: 'mentor_id'

  has_many :developer_ratings,
           class_name: 'Rating',
           foreign_key: 'developer_id'

  has_many :mentor_relationships,
           class_name: 'relationship',
           foreign_key: 'mentor_relationships_id'

  has_many :developer_relationships,
           class_name: 'relationship',
           foreign_key: 'developer_relationships_id'
end
