import React, { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function RequestURL({children, type, url}) {

	const [copy, setCopy] = useState(false);

	let badgeClass = type === 'POST' ?
		`request-badge badge badge--success` : `request-badge badge badge--info`;

  return (
    <div className="margin-bottom--md">
			<code className="request-container">
				<span className={badgeClass}>{type}</span>
				<span className="request-url">{url}</span>
				<CopyToClipboard 
					text={url}
					onCopy={() => setCopy(true)}>
					<button className="request-copy-button clean-btn button button--secondary button--sm">
						{copy ? "Kopyalandı" : "Kopyala"}
					</button>
				</CopyToClipboard>
			</code>
    </div>
  );
}