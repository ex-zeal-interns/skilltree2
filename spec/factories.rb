# frozen_string_literal: true

FactoryBot.define do
  factory :rating do
    
  end

  factory :category do
    
  end

  factory :user do
    email { "jimcarey@themask.com" }
    password { "password" }
    first_name { "Jim" }
    last_name { "Carey" }
    time_zone { "Hawaii" }
  end
end
