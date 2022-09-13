module.exports = {
    // symptoms = {pain: 3, color: "blue", noPoopDays: 2}
    apendix: function(pain, color, noPoopDays) {
        // pain < 5
        if (symptoms.pain < 5) return (
            "no se preocupe, tome Festal"
        );
        if (symptoms.noPoopDays > 2) {
            if (symptoms.color === "blue") return "vaya al hospital ya mismo";
            return "coma fibra y tome acetaminofén";
        }
    }
};
