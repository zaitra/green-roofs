
import React from "react"
import { useTranslation } from "react-i18next";
import MapLegendRowInfo from '../MapLegendRowInfo';
import MapLegendRow from "../MapLegendRow";
import { getDataByCategoryType } from "./utils"

interface IMapLegendNewProps {
	legendList: Array<String>
	showPopupsInfoMessage: boolean
}

const MapLegend: React.FC <IMapLegendNewProps> = ({
	legendList,
	showPopupsInfoMessage
}) => {
	const { t } = useTranslation();
	return (
		<div className="legend">
			{legendList.map((legendType :any) => {
				let categoryData = getDataByCategoryType(legendType, t);
				return <MapLegendRow categoryData={categoryData}/>;
			})}
			{showPopupsInfoMessage ? 
				<div>
					<MapLegendRowInfo tooltipLabelText="Klikni na budovu" tooltipText={t('map.legend.after-click')}/>
					<MapLegendRowInfo tooltipLabelText="Najeď myší na budovu" tooltipText={t('map.legend.after-hover')}/>
				</div>
			: null}
		</div>
	)
}

export default MapLegend;

