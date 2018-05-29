
export function hero_icon(hero_uri){
  var ICON_URL = `http://cdn.dota2.com/apps/dota2/images/heroes/`
  return ICON_URL + hero_uri + '_icon.png'
}

export function hero_image_small(hero_uri){
  var SB_URL = `http://cdn.dota2.com/apps/dota2/images/heroes/`
  return SB_URL + hero_uri + '_sb.png'
}

export function hero_image_large(hero_uri){
  var LG_URL = `http://cdn.dota2.com/apps/dota2/images/heroes/`
  return LG_URL + hero_uri + '_lg.png'
}
