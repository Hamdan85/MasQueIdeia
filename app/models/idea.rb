class Idea < ActiveRecord::Base
  attr_accessible :category, :image, :tags, :text, :title

  validates :user_id, :presence => true

  belongs_to :user
end
