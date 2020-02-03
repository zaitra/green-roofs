/*
* All types
*/

export interface IMapProps {
    zoom?: any,
    geojsonData?: any,
    center?: any,
    bounds?: any,
    heatMapBounds?: any,
    geoStyle?: any,
	addFeatures?: any,
	legend?: any,
	popups?: any
	heatMapImg?: any
}
export interface H2Props {
    className?: String,
    children: Object
}
export interface IContainerProps {
    className?: String,
    children: Object
}
export interface IMapContainerProps {
    children: Object
}
export interface IPProps {
    children: Object,
    className?: String
}
export interface IShineProps {
    children: String
}
export interface IMapLegendRowInfoProps {
	tooltipLabelText: String,
	tooltipText: String
}
export interface IMapLegendRowProps {
	categoryData: any
}
export interface IMapLegendNewProps {
	legendList: Array<String>
	showPopupsInfoMessage: boolean
}