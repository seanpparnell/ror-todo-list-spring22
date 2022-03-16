class Todo < ApplicationRecord
  belongs_to :list
  has_many :notes, dependent: :destroy
  validates :title, presence: true
end