"use client";

import {
  Button,
  Alert,
  TextField,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ShoppingCart, Info } from "lucide-react";
import { useState } from "react";

export default function ComponentsShowcase() {

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <p className="text-blue-500 mb-2">Production-ready components</p>
        <h1 className="text-3xl font-bold mb-2">Beautiful and powerful,</h1>
        <h2 className="text-blue-500 text-3xl font-bold mb-4">
          right out of the box
        </h2>
        <div className="flex justify-center gap-4">
          <span className="text-gray-600">Custom theme</span>
          <span className="text-blue-500">Material Design</span>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-3 gap-4">
        {/* First Row */}
        <div className="p-6 border rounded-lg">
          <div className="flex gap-4 mb-6">
            <span className="text-sm">Small</span>
            <span className="text-blue-500 text-sm">Medium</span>
            <span className="text-sm">Large</span>
          </div>
          <Button
            variant="contained"
            startIcon={<ShoppingCart size={18} />}
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            ADD TO CART
          </Button>
          <div className="mt-4 text-sm font-medium">Button</div>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="flex gap-4 mb-6">
            <span className="text-blue-500 text-sm">Standard</span>
            <span className="text-sm">Filled</span>
            <span className="text-sm">Outlined</span>
          </div>
          <Alert icon={<Info size={18} />} severity="info">
            Check out this alert!
          </Alert>
          <div className="mt-4 text-sm font-medium">Alert</div>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="flex gap-4 mb-6">
            <span className="text-sm">Outlined</span>
            <span className="text-sm">Standard</span>
            <span className="text-sm">Filled</span>
          </div>
          <TextField
            label="Username"
            defaultValue="Ultraviolet"
            variant="outlined"
            fullWidth
          />
          <div className="mt-4 text-sm font-medium">Text Field</div>
        </div>

        {/* Second Row (Menu & Table merged into 2 columns) */}
        <div className="col-span-1 p-6 border rounded-lg">
          <div className="text-blue-500 cursor-pointer">
            CLICK TO OPEN
          </div>
          <Menu >
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </Menu>
          <div className="mt-4 text-sm font-medium">Menu</div>
        </div>

        <div className="col-span-1 p-6 border rounded-lg">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert</TableCell>
                  <TableCell align="right">Calories</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Frozen yoghurt</TableCell>
                  <TableCell align="right">109</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cupcake</TableCell>
                  <TableCell align="right">305</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <div className="mt-4 text-sm font-medium">Table</div>
        </div>

        {/* Learn More Section */}
        <div className="col-span-1 p-6 border rounded-lg text-center">
          <h3 className="font-medium mb-2">Want to see more?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Check out the docs for details of the complete library.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-2 justify-center"
          >
            Learn more
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
