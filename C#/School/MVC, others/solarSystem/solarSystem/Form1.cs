using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace solarSystem
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        string[] PlanetInfo =
        {
            "Планета Меркурий",
            "Планета Земя",
            "Планета Юпитер",
            "Планета Уран",
            "Планета Венера",
            "Планета Марс",
            "Планета Сатурн",
            "Планета Нептун"
        };

        double[] radiuses =
        {
            2439,
            6371,
            69911,
            25362,
            6051,
            3389,
            58232,
            24622,
        };

        double[] densities =
        {
            5.43,
            5.51,
            1.33,
            1.27,
            5.24,
            3.93,
            687,
            1.64,
        };

        private void button3_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[0];
            textBox2.Text = radiuses[0].ToString();
            textBox3.Text = densities[0].ToString();
            ClearLabels();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[1];
            textBox2.Text = radiuses[1].ToString();
            textBox3.Text = densities[1].ToString();
            ClearLabels();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[2];
            textBox2.Text = radiuses[2].ToString();
            textBox3.Text = densities[2].ToString();

            ClearLabels();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[3];
            textBox2.Text = radiuses[3].ToString();
            textBox3.Text = densities[3].ToString();
            ClearLabels();

        }

        private void button5_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[4];
            textBox2.Text = radiuses[4].ToString();
            textBox3.Text = densities[4].ToString();
            ClearLabels();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[5];
            textBox2.Text = radiuses[5].ToString();
            textBox3.Text = densities[5].ToString();
            ClearLabels();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[6];
            textBox2.Text = radiuses[6].ToString();
            textBox3.Text = densities[6].ToString();
            ClearLabels();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            textBox1.Text = PlanetInfo[7];
            textBox2.Text = radiuses[7].ToString();
            textBox3.Text = densities[7].ToString();
            ClearLabels();

        }

        private void button9_Click(object sender, EventArgs e)
        {
            double radius = double.Parse(textBox2.Text);
            double density = double.Parse(textBox3.Text);
            double volume = 4 * radius * radius * Math.PI / 3;
            double weight = volume * density * 1000;
            label2.Text = "Обем (куб.м.): " + volume.ToString("0.00");
            label3.Text = "Маса (тонове): " + weight.ToString("0.00");
        }

        public void ClearLabels()
        {
            label2.Text = "Обем (куб.м.): ";
            label3.Text = "Маса (тонове): ";
        }
    }
}
