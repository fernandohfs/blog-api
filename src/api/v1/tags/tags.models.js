import { Model } from "sequelize";

export default (sequelize, dataTypes) => {
  class Tag extends Model {}

  Tag.init({ name: dataTypes.STRING }, { sequelize, modelName: "Tag" });

  Tag.associate = models => {
    models.Tag.belongsTo(models.Post, { as: "post", foreignKey: "post_id" });
  };

  return Tag;
};
