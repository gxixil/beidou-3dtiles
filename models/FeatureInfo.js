import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-postgres.js';

const FeatureInfo = sequelize.define('FeatureInfo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: true
    },
    relation_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grid_level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    create_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    creator: {
        type: DataTypes.STRING,
        allowNull: true
    },
    update_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updater: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: true
    },
    error_msg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    model_url: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: 'feature_info',
    timestamps: false
});

export { FeatureInfo };
