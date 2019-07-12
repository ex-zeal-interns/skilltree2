require 'rails_helper'

RSpec.describe User, type: :model do
  it "should not sign up with existing email" do
    user = User.new(email: "test@email.com", first_name: "Bob", last_name: "Smith", time_zone: "PT")
    user.save
    user2 = User.new(email: "test@email.com", first_name: "Sally", last_name: "Jones", time_zone: "ET")
    expect(user2).to_not be_valid
  end

  it "should not sign up with missing email" do
    user = User.new(first_name: "Bob", last_name: "Smith", time_zone: "PT")
    expect(user).to_not be_valid
  end

  it "should not sign up with missing first name" do
    user = User.new(email: "test@email.com", last_name: "Smith", time_zone: "PT")
    expect(user).to_not be_valid
  end

  it "should not sign up with missing last name" do
    user = User.new(email: "test@email.com", first_name: "Bob", time_zone: "PT")
    expect(user).to_not be_valid
  end

  it "should not sign up with missing time zone" do
    user = User.new(email: "test@email.com", first_name: "Bob", last_name: "Smith")
    expect(user).to_not be_valid
  end
end
