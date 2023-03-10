class AddressSerializer < ActiveModel::Serializer
  attributes :id, :line_one, :line_two, :zip_id, :zip

  def total_addresses
    object.addresses.uniq.length
  end

  belongs_to :zip
end
