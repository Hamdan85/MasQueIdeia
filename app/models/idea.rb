class Idea < ActiveRecord::Base
  attr_accessible :category, :image, :owner, :tags, :text, :title
end
