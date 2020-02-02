import React from 'react';
import Tooltip from 'react-tooltip-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const MapLegendRowInfo: React.FC <any> = ({
	tooltipLabelText, 
	tooltipText
}) => {
	const iconInfo = <FontAwesomeIcon icon={faInfoCircle} size="2x"/>

	return (
		<ul className="list-group-info list-group list-group-horizontal mt-1">
			{/* first column */}
			<li className={`list-group-item d-flex align-items-center`}>
				<Tooltip
					content={(
						<p>{tooltipText}</p>
					)}
					direction="down"
					tagName="span"
					className="target"
					tipContentClassName=""
					>
					{iconInfo}
				</Tooltip>
			</li>
			{/* second column */}
			<li className={`list-group-item d-flex align-items-center`}>
				<Tooltip
					content={(
						<p>{tooltipText}</p>
					)}
					direction="down"
					tagName="span"
					className="target"
					tipContentClassName=""
					>
					{tooltipLabelText}
				</Tooltip>
			</li>
		</ul>
	)
}

export default MapLegendRowInfo;