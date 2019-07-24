# frozen_string_literal: true

FactoryBot.define do
  factory :rating do
      score { 5 }
      mentor_id { 1 }
      developer_id { 1 }
      category_id { 1 }
  end

  factory :category do
    category_name { "purple" }
  end

  factory :user do
    email { "jimcarey@themask.com" }
    password { "password" }
    first_name { "Jim" }
    last_name { "Carey" }
    time_zone { "Hawaii" }
  end
end
