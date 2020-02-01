import { MapControl, withLeaflet} from "react-leaflet";

import L from "leaflet";


class MapLegend extends MapControl<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
		this.leafletElement = this.createLeafletElement(this.props)
	}
	createLeafletElement(props :any ){
		return props
	}

	// updateLeafletElement(fromProps :any, toProps :any) {
	// 	console.log(this.leafletElement.leaflet.layerContainer)
	// 	// }
	// 	if(fromProps.translations != toProps.translations){

	// 		console.log('zmena updateLeafletElement!!', toProps.translations)
	// 		// TODO: HACK!
	// 		this.createLegend(toProps.translations)
	// 	}
	// }
	componentDidMount() {

		this.createLegend(this.props.translations);
	}

	createLegend(t: any) {
		// get color depending on category type
		const getColor = (categoryType :any) => {
		return categoryType === "1"
			? "#7f00ff" // purple
			: categoryType === "2"
			? "#4990E2"
			: "#009548"
		};
		const legend = new L.Control({ position: "bottomright" });
	
		legend.onAdd = () => {
		const div = L.DomUtil.create("div", "info legend")
		const categories = [{
			type: "1",
			description: t.prague
		}, 
		{
			type: "2",
			description: t.cz
		},
		{
			type: "3/4",
			description: t.different
		}];
		let labels :any = [];

		categories.map(category => {		  
			labels.push(
			`<div class="col-12"><i style="background: ${getColor(category.type)}"></i>
				<span class="label">${category.description}</span>
			</div>`
			);
		})
		labels.push(`<div class="col-12 mt-2">* ${t.afterclick}</div>`)
		div.innerHTML = labels.join("");
		return div;
		};
	
		const { map } = this.props.leaflet;
		legend.addTo(map);
	}
 }

export default withLeaflet(MapLegend);