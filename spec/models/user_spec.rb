# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'user' do
    let(:user) { build(:user) }

    context 'when all required user information is entered' do
      it 'user' do
        expect(user).to be_valid
      end
    end
  end
  context 'should not allow a new user to be created with an existing email' do
    let!(:user) { create(:user, email: 'testemail@address.com') }
    let(:user2) { build(:user, email: 'testemail@address.com') }
    it 'user' do
      expect(user2).to_not be_valid
    end
  end
  context 'when required user information is missing' do
    let(:user) do
      build(:user,
            email: nil,
            password: nil,
            first_name: nil,
            last_name: nil,
            time_zone: nil)
    end
    it 'cannot create a user without the params' do
      expect(user).to_not be_valid
    end
  end
end
