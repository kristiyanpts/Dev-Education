using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Sport
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializвeComponent();
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void buttonCalculate_Click(object sender, EventArgs e)
        {
            string selectedSport = dropDownSport.Text;
            double time = double.Parse(textBoxTime.Text);
            double totalCalories = 0;
            switch (selectedSport)
            {
                case "Футбол":
                    totalCalories = (time / 60) * 420;
                    break;
                case "Аеробика":
                    totalCalories = (time / 60) * 500;
                    break;
                case "Боулинг":
                    totalCalories = (time / 60) * 200;
                    break;
                case "Тенис на корт":
                    totalCalories = (time / 60) * 540;
                    break;
                case "Волейбол":
                    totalCalories = (time / 60) * 220;
                    break;
                default:
                    break;
            }
            textBoxResult.Text = "Изгорени калории: " + totalCalories.ToString("0.00");
        }

        private void formCalories_Load(object sender, EventArgs e)
        {

        }
    }
}