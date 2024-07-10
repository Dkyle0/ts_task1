interface IPrice {
	price: number,
	discount: number,
	isInstallment: boolean,
	months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: IPrice): number => {
    let result: number = 0;
	if (isInstallment){
		result = (price - price / 100 * discount) / months;
	}
	else {
		result = price;
	}

	return result;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250