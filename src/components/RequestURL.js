import React from "react";

export default function RequestURL({children, type, url}) {

	let badgeClass = type === 'POST' ?
		`request-badge badge badge--success` : `request-badge badge badge--info`;

  return (
    <div className="margin-bottom--md">
			<code className="request-container">
				<span className={badgeClass}>{type}</span>
				<span className="request-url">{url}</span>
			</code>
    </div>
  );
}