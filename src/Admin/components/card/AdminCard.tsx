import React from "react";
import "../../styles/Style.scss";

interface AdminCardI {
  icon: React.ReactNode;
  count: number;
  title: string;
}

function AdminCard({ icon, count, title }: AdminCardI) {
  return (
    <div className="admin__card__wrapper">
      <div className="admin__card__content">
        <p className="card__icon">{icon}</p>
        <p className="card__title">{title}</p>
      </div>
      <h3>{count}</h3>
    </div>
  );
}

export default AdminCard;
