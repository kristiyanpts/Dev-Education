using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Text.RegularExpressions;

namespace Restaurant
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        double singleSaladPrice = 0;
        double singleMainPrice = 0;
        double singleDesertPrice = 0;

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (comboBox1.Text == "Шопска Салата")
            {
                singleSaladPrice = 6.7;
            } else if (comboBox1.Text == "Салата \"Цезар\"")
            {
                singleSaladPrice = 7.8;
            } else
            {
                singleSaladPrice = 5.6;
            }
            priceSalad.Text = "Цена: " + singleSaladPrice + "лв.";
        }

        private void comboBox2_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (comboBox2.Text == "Пилешка пържола с пържени картофи")
            {
                singleMainPrice = 10.7;
            }
            else if (comboBox2.Text == "Панирани натурални пилешки хапки")
            {
                singleMainPrice = 6.4;
            }
            else
            {
                singleMainPrice = 8.9;
            }
            priceMainCourse.Text = "Цена: " + singleMainPrice + "лв.";
        }

        private void comboBox3_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (comboBox3.Text == "Шоколадова торта")
            {
                singleDesertPrice = 5.4;
            }
            else if (comboBox3.Text == "Палачинки с шоколад")
            {
                singleDesertPrice = 6.6;
            }
            else
            {
                singleDesertPrice = 10;
            }
            priceDesert.Text = "Цена: " + singleDesertPrice + "лв.";
        }

        private void saladAmount_TextChanged(object sender, EventArgs e)
        {
            int amount = 0;
            try
            {
                amount = int.Parse(saladAmount.Text);
            }
            catch (FormatException)
            {
                // nothing
            }
            priceSalad.Text = "Цена: " + singleSaladPrice * amount + "лв.";
        }

        private void amountMainCourse_TextChanged(object sender, EventArgs e)
        {
            int amount = 0;
            try
            {
                amount = int.Parse(amountMainCourse.Text);
            }
            catch (FormatException)
            {
                // nothing
            }
            priceMainCourse.Text = "Цена: " + singleMainPrice * amount + "лв.";
        }

        private void amountDesert_TextChanged(object sender, EventArgs e)
        {
            int amount = 0;
            try
            {
                amount = int.Parse(amountDesert.Text);
            }
            catch (FormatException)
            {
                // nothing
            }
            priceDesert.Text = "Цена: " + singleDesertPrice * amount + "лв.";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            double saladPrice = double.Parse(Regex.Match(priceSalad.Text, @"\d+").Value);
            double mainPrice = double.Parse(Regex.Match(priceMainCourse.Text, @"\d+").Value);
            double desertPrice = double.Parse(Regex.Match(priceDesert.Text, @"\d+").Value);
            double totalPrice = saladPrice + mainPrice + desertPrice;
            double discount = 0;

            if (totalPrice >= 100)
            {
                discount = totalPrice * 0.08;
                totalPrice = totalPrice - discount;
            } else if (totalPrice >= 50)
            {
                discount = totalPrice * 0.04;
                totalPrice = totalPrice - discount;
            }

            textBox1.Text = "Крайна Сума: " + totalPrice + "лв." + Environment.NewLine + "Отстъпка: " + discount + "лв.";
        }

        private void button2_Click(object sender, EventArgs e)
        {
            comboBox1.SelectedIndex = -1;
            comboBox2.SelectedIndex = -1;
            comboBox3.SelectedIndex = -1;
            amountDesert.Text = "";
            amountMainCourse.Text = "";
            saladAmount.Text = "";
            textBox1.Text = "";
        }
    }
}
