json.pokemon do
  json.extract! @poke, :id,:name,:attack,:defense,:moves,:poke_type
  json.image_url asset_path(@poke.image_url)


end
json.items @poke.items do |item|
  json.id item.id
  json.name item.name
  json.pokemon_id item.pokemon_id
  json.price item.price
  json.image_url item.image_url
end
