import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-postgres.js';

const BeidouCodeGeo = sequelize.define('BeidouCodeGeo', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    code2d: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lower_bound: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    tableName: 'beidou_code_geo',
    timestamps: true
});

export { BeidouCodeGeo };
