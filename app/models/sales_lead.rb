class SalesLead < ApplicationRecord
    #project management
    belongs_to :user
    belongs_to :company
    has_one :job_title
    has_many :phone_numbers
    has_many :emails
end
