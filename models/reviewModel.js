

module.exports = (sequelize,DataTypes) => {
    const review = sequelize.define("review", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    },{
        timestamps: false
    })
    return review
}

