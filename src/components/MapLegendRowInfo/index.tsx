import React from 'react';
import Tooltip from 'react-tooltip-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IMapLegendRowInfoProps } from '../../types';

const MapLegendRowInfo: React.FC <IMapLegendRowInfoProps> = ({
	tooltipLabelText, 
	tooltipText
}) => {
	const iconInfo = <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
	let firstColumnItems = [iconInfo, tooltipLabelText]

	const tooltipLists = firstColumnItems.map((item, i) => {
		return (
			<li className={`list-group-item d-flex align-items-center`} key={i}>
				<Tooltip
					content={(
						<p>{tooltipText}</p>
					)}
					direction="down"
					tagName="span"
					className="target"
					tipContentClassName=""
					>
					{item}
				</Tooltip>
			</li>
		)
	})

	return (
		<ul className="list-group-info list-group list-group-horizontal mt-1">
			{tooltipLists}
		</ul>
	)
}

export default MapLegendRowInfo;