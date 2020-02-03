import React from 'react';
import { IMapLegendRowProps } from '../../types';

const MapLegendRow: React.FC <IMapLegendRowProps> = ({
	categoryData
}) => (
	<ul className="list-group list-group-horizontal">
		<li className={`list-group-item d-flex align-items-center ${categoryData.color}`}>
				<i className={categoryData.color}></i> 
			<span className="label">
				<span>{ categoryData.ownerKey }: </span>
				<strong>{categoryData.ownerValue}</strong>
			</span>
		</li>
	</ul>
)


export default MapLegendRow;