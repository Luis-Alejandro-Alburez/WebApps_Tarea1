function recommendProduct(age, isMember, purchaseHistory) {
  const { tech, fashion, other } = purchaseHistory;

  if ((isMember && tech >= 5) || (age >= 18 && age <= 30 && fashion >= 2)) {
    return "High-Tech Product";
  } else if (
    (!isMember && tech + fashion + other >= 3) ||
    (age >= 25 && age <= 40)
  ) {
    return "Fashion Product";
  } else {
    return "Generic Product";
  }
}

// Ejemplo
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); // Output: "High-Tech Product"
