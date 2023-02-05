module.exports = (sequelize, Sequelize) => {
    const Names = sequelize.define("names", {
        name: {
            type: Sequelize.STRING
        },

    });

    return Names;
};