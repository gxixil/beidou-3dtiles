import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-postgres.js';

const BeidouFeatrueRelation = sequelize.define('BeidouFeatrueRelation', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    feature_info_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    beidou_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'beidou_featrue_relation',
    timestamps: true
});

export { BeidouFeatrueRelation };
