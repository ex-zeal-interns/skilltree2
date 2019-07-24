# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CategoriesController, type: :controller do
  describe 'categories' do
    let(:category) { build(:category) }
    context 'when a category exists it exists'
    it 'category' do
      expect(category).to be_valid
    end
    it 'purple' do
      expect(category.category_name).to eq('purple')
    end
  end
end
