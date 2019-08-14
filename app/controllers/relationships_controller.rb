class RelationshipsController < ApplicationController

# mentors
  def pending_mentors
    @mentors = []
    Relationship.find_each do |relationship|
      if relationship.developer_id == current_user.id && relationship.status == 1
        @mentors << relationship
      end
    end
    render json: @mentors
  end

  def my_mentors
    @mentors = []
    Relationship.find_each do |relationship|
      if relationship.developer_id == current_user.id && relationship.status == 2
        @mentors << relationship.as_json(:include => :mentor)
      end
    end
    render json: @mentors
  end

  def create_mentor
  end

# developer
  def pending_developers
    @mentors = []
    Relationship.find_each do |relationship|
      if relationship.mentor_id == current_user.id && relationship.status == 1
        @mentors << relationship
      end
    end
    render json: @mentors
  end

  def my_developers
    @mentors = []
    Relationship.find_each do |relationship|
      if relationship.mentor_id == current_user.id && relationship.status == 2
        @mentors << relationship.as_json(:include => :developer)
      end
    end
    render json: @mentors
  end

  def create_developer
  end

  def relationship_params
    params.require(:relationship).permit(:mentor_id, :developer_id, :status)
  end


end
