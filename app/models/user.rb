class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, presence: true, uniqueness: {case_sensitive: false}
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :time_zone, presence: true

  has_many :mentor_ratings,
            :class_name => "rating",
            :foreign_key => "mentor_ratings_id"

  has_many :developer_ratings,
            :class_name => "rating",
            :foreign_key => "developer_ratings_id"
end
