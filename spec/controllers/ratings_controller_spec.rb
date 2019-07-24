require 'rails_helper'

RSpec.describe RatingsController, type: :controller do
    describe 'ratings' do
        let(:user) { FactoryBot.build(:user, id: 1) }
        let(:user2) { FactoryBot.build(:user, email: "fake_email@email.com") }
        let(:category) { FactoryBot.build(:category) }
        let(:rating) { FactoryBot.build(:rating, mentor: user, developer: user, category: category) }
        let(:rating2) { FactoryBot.build(:rating, mentor: user2, developer: user2, category: category) }
        context 'my ratings show up on my profile page'
            it 'ratings' do
                expect(rating).to be_valid
            end
            it 'displays my ratings' do
                allow(Rating).to receive(:where) { [rating] }
                get :my_ratings, params: {user_id: user.id}
                expect(response.body).to eq([rating.as_json(include: { category: {} })].to_json)
            end

    end
end
