
export const getDataByCategoryType = (categoryType :String, t:any) => {
	switch(categoryType) {
		case "1":
			return {
				color: "purple",
				ownerKey: t("map.legend.description.owner"),
				ownerValue: t("map.legend.description.prague")
			}
		case "2":
			return {
				color: "blue",
				ownerKey: t("map.legend.description.owner"),
				ownerValue: t("map.legend.description.cz")
			}
		default:
			return {
				color: "green",
				ownerKey: t("map.legend.description.owner"),
				ownerValue: t("map.legend.description.different")
			}
	}
};