class User < ApplicationRecord
    has_secure_password
    has_many :trips
    has_many :vans, through: :trips
    
    validates_uniqueness_of :username
    validates_presence_of :username
    
end
