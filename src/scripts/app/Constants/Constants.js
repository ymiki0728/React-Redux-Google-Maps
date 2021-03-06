window.GLOBAL_MAP_CONST = {};
window.GLOBAL_MAP_CONST.GOOGLE_API_KEY = 'AIzaSyCuAfuuTqi6egha5XIV6tcFH59CCLpFvwk';
window.GLOBAL_MAP_CONST.DEFAULT_MAP_CENTER = [50.450761, 30.523756];
window.GLOBAL_MAP_CONST.DEFAULT_MAP_ZOOM = 12;
window.GLOBAL_MAP_CONST.MAP_ZOOM_AFTER_MARKER_CLICK = 16;
window.GLOBAL_MAP_CONST.DEFAULT_MARKER_CLUSTER_GRID_SIZE = 20;
window.GLOBAL_MAP_CONST.DEFAULT_MINIMUM_CLUSTER_SIZE = 2;
window.GLOBAL_MAP_CONST.DEFAULT_LIST_OF_ADDRESSES_FOLDED = true;
window.GLOBAL_MAP_CONST.GOOGLE_MAP_MARKER_ICON = 'https://www.favorit.com.ua/static/media/themes/maps/2.0/img/map-pin-silhouette.png';

window.GLOBAL_MAP_CONST.REGIONS_URL = '/content/cashdesks/regions/';
window.GLOBAL_MAP_CONST.CITIES_BY_REGIONS_URL = '/content/cashdesks/region/';
window.GLOBAL_MAP_CONST.CASHDESKS_BY_CITY_URL = '/content/cashdesks/';

const externalVars = window.GLOBAL_MAP_CONST || {};

export const {
	GOOGLE_API_KEY,
	DEFAULT_MAP_CENTER,
	DEFAULT_MAP_ZOOM,
	MAP_ZOOM_AFTER_MARKER_CLICK,
	DEFAULT_MARKER_CLUSTER_GRID_SIZE,
	DEFAULT_MINIMUM_CLUSTER_SIZE,
	DEFAULT_LIST_OF_ADDRESSES_FOLDED,
	GOOGLE_MAP_MARKER_ICON,
	REGIONS_URL,
	CITIES_BY_REGIONS_URL,
	CASHDESKS_BY_CITY_URL,
} = externalVars;
