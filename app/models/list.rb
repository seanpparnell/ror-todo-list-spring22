class List < ApplicationRecord
  has_many :todos, dependent: :destroy
  validates :title, :desc, presence: true
  
end
